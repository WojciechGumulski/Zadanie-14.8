
var GIPHY_LOADING_URL = 'https://giphy.com/gifs/youtube-loading-gif-3o7bu3XilJ5BOiSGic';
var styles = {
	minHeight: '310px',
  	margin: '0.5em'
};

Gif = React.createClass({
  	getUrl: function() {
    	return this.props.sourceUrl || GIPHY_LOADING_URL;
  	},
  	render: function() {
    	var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

    	return (
      		<div style={styles}>
        		<a href={this.getUrl()} title='view this on giphy' target='new'>
          			<img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}}/>
        		</a>
      		</div>
    	);
  	}
});
