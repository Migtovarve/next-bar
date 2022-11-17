function IndicatorCarrousel() {
  return (
    <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 ">
      <button
        type="button"
        className="w-5 h-5 rounded-full bg-[#D77674]"
        aria-current="false"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      />
      <button
        type="button"
        className="w-5 h-5 rounded-full bg-[#643736]"
        aria-current="true"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      />
      <button
        type="button"
        className="w-5 h-5 rounded-full bg-[#D77674]"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      />
    </div>
  );
}

export default IndicatorCarrousel;
