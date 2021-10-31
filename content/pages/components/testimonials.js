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
            /


            <h2 className="text-sm text-gray-400" data-sb-field-path=".name">
              {logo.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;