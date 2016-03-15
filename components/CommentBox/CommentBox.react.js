import React from 'react';
import ReactDOM from 'react-dom';

import marked from 'marked';

import $ from 'jquery';

var CommentList = React.createClass({
    render: function()
    {
        var data = this.props.data;
        var commentNodes = data.map(function(comment){
            return (
                <Comment key={comment.id} author={comment.author}>
                    {comment.text}
                </Comment>
            )
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
});

var CommentForm = React.createClass({
    getInitialState: function()
    {
        return {author: '', text: ''}
    },
    handleAuthorChange: function(e)
    {
        this.setState({author: e.target.value})
    },
    handleTextChange: function(e)
    {
        this.setState({text: e.target.value})
    },
    handleSubmit: function(e)
    {
        e.preventDefault();
        var author = this.state.author.trim();
        var text   = this.state.text.trim();
        if (!author || !text)
        {
            return;
        }

        // todo
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    },
    render: function()
    {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
                <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
                <input type="submit" value="Post" />
            </form>
        )
    }
});

var CommentBox = React.createClass({
    getInitialState: function()
    {
        return {data: []}
    },
    loadCommentsFromServer: function()
    {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (data)=>{
                this.setState({data: data})
            },
            error: (xhr, status, err)=>{
                console.log(this.props.url, status, err.toString());
            }
        });
    },
    componentDidMount: function()
    {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval)
    },
    handleCommentSubmit: function(comment)
    {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'post',
            data: comment,
            success: function(data)
            {
                this.setState({data: data})
            }.bind(this),
            error: function(xhr, status, err)
            {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function()
    {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        )
    }
});

var Comment = React.createClass({
    rawMarkup: function()
    {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return {__html: rawMarkup};
    },
    render: function()
    {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML = {this.rawMarkup()}/>
            </div>
        )
    }
});

export {CommentList, CommentForm, CommentBox, Comment}
