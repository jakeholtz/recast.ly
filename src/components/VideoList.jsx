var VideoList = ({videos, handleVideoListEntryTitleClick}) => (

  <div className="video-list media">
    {videos.map((video) =>
      <VideoListEntry
        key={video.etag}
        video={video}
        handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
      />
    )}
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;
