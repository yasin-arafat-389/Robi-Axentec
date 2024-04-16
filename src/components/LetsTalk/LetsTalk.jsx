const LetsTalk = () => {
  return (
    <div className="bg-black">
      <div className="h-[700px] pt-20">
        <video
          src="letsTalkVideo.mov"
          autoPlay
          muted
          loop
          className="letsTalkVideo"
        ></video>

        <div className="text-5xl text-white absolute top-0">Hi</div>
      </div>
    </div>
  );
};

export default LetsTalk;
