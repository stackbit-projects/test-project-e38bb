const TestimonialsSection = (props) => {
  const { annotationPrefix, testimonials, title } = props;
  return (
    <div
      className=""
      data-sb-field-path={annotationPrefix}>
      <h1
        className=""
        data-sb-field-path=".title">
        {title}
      </h1>
      <div
        className=""
        data-sb-field-path=".logos">
        {testimonials.map((testimonial, index) => (
          <div className="" key={index} data-sb-field-path={`.${index}`}>
            <img
              className=""
              height="60px"
              width="60px"
              src={logo.image}
              data-sb-field-path=".image#@src"
            />
            <div> 
                {testimonial.mainContent}
            </div>
            
            <div data-sb-field-path=".name">
              {testimonial.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;