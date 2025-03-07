<div class="video-container">
  <iframe
    class="video"
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/_NHuQ32dCpc?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=1&loop=1&playlist=_NHuQ32dCpc"
    title="sd-pro"
    frameBorder="0"
    referrerPolicy="strict-origin-when-cross-origin"
    allow="autoplay; encrypted-media; picture-in-picture"
    style="
      height: 100%,
      objectFit: cover,
      pointerEvents: none,
    "
  ></iframe>
</div>

<style lang="scss">
  .video-container {
    position: relative; // 让 iframe 绝对定位生效
    width: 100%;
    height: 86vh; // 设置父容器的高度
    overflow: hidden;
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
