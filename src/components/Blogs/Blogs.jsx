
const Blogs = () => {
    return (
        <div className="mb-8">
            <div className="text-center my-4">
          <h1 className="text-4xl font-bold text-center mt-4 mb-16">
            Welcome to my blog!
          </h1>
          <h2 className="text-2xl font-bold text-center mb-8">
            Some intermediate concepts about React
          </h2>
          <h4 className="mb-16">
            Here I am going to discus about some intermediate concept of react
            components, props type, custom hook & the basic concept regarding node
            server & express js.
          </h4>
        </div>

        {/* Q&A part */}
        {/* question # 1 */}
        <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
          <h3 className="font-bold mb-4 border-b-2 pb-3 border-slate-100">
            A. What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </h3>
          <p className="px-8">
            Uncontrolled component refers to a component in React on which React
            has no direct manipulation or control, the DOM controls it.
            <br /> <br />
            On the other hand, controlled components are components in which react
            can directly control or manipulate and update the DOM or display data
            to its user. It will automatically be changed & handled by using
            event-based callbacks on every onChange event occurrence.
            <br /> <br />
            <b>Differences:</b>
            <br /> <br />
            <b>1.</b>
            <br /> <br />
            In controlled components, data is controlled by the parent component.
            It does not maintain its internal state. Managed by React state.
            <br /> <br />
            In uncontrolled components, data is controlled by the DOM itself.It
            maintains its internal states. Managed by the components own internal
            state.
            <br /> <br />
            <b>2.</b>
            <br /> <br />
            Controlled components accepts its current value as a prop. Here, data
            flows from parent component to component.
            <br /> <br />
            Uncontrolled components uses a ref for their current values. Here,
            data flows within the component.
            <br /> <br />
            <b>3.</b>
            <br /> <br />
            Controlled components has better control over the form elements and
            data. It allows validation control.
            <br /> <br />
            Uncontrolled components has limited control over the form elements and
            data. It does not allow validation control.
            <br /> <br />
            <b>4.</b>
            <br /> <br />
            In controlled components, there are less complex code & easier to
            debug. Generally faster as there is less state management. So is is
            considered as a best practice.
            <br /> <br />
            In uncontrolled components, there are more complex code & more
            difficult to debug. Generally slower as there is more state
            management. So it is considered as an alternate approach.
          </p>
        </div>

        {/* question # 2 */}
        <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
          <h3 className="font-bold mb-4 border-b-2 pb-3 border-slate-100">
            B. Compare SQL and NoSQL databases?
          </h3>
          
        </div>

        {/* question # 3 */}
        <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
          <h3 className="font-bold mb-4 border-b-2 pb-3 border-slate-100">
            C. What is express js? What is Nest JS?
          </h3>
          
        </div>

        {/* question # 4 */}
        <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
          <h3 className="font-bold mb-4 border-b-2 pb-3 border-slate-100">
            D. What is MongoDB aggregate and how does it work?
          </h3>
          
        </div>
      </div>
    );
};

export default Blogs;