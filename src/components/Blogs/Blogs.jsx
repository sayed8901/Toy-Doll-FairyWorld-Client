import useTitle from "../../CustomHooks/useTitle";
import AnimatedSection from "../AOS-Animate/AnimatedSection";

const Blogs = () => {
  useTitle("Blog");

  return (
    <div className="mb-8 px-4">
      <AnimatedSection>
        <div className="text-center my-4">
          <h1 className="text-4xl font-bold text-center my-10">
            Welcome to my <span className="text-gradient">blog</span>
          </h1>

          <h2 className="text-2xl font-bold text-center mb-8">
            Some basic concepts about <br />
            <span className="text-3xl text-gradient">Server & Database</span>
          </h2>
          <h4 className="mb-16">
            Here I am going to discus about some of the basic concepts of node
            or express js server, SQL & NoSQL database, basic operations of
            MongoDB.
            <br /> I am also trying to discus the core or fundamentals of JWT,
            access token, refresh token, etc.
          </h4>
        </div>
      </AnimatedSection>

      {/* Q&A part */}
      {/* question # 1 */}
      <AnimatedSection>
        <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
          <h3 className="text-xl font-bold mb-4 border-b-2 pb-3 border-slate-100">
            A. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p className="px-8">
            <b>Access token and refresh token:</b>
            <br /> <br />
            When the user calls the authorization server to get any data access
            or his authorization grant, then if all the credentials are correct,
            he is given 2 types of tokens. Namely: access token and refresh
            token.
            <br /> <br />
            Access Token is the permission. Usually, the access token is saved
            on the client side. Access token is valid for a short time, whereas
            refresh token is valid for a long time.
            <br /> <br />
            And if the access token expires or becomes old, then the refresh
            token tries to give access token or permission again.
            <br /> <br />
            If possible, give a new Access Token.
            <br /> <br />
            And if not, the refresh token will be canceled and you have to login
            again.
            <br /> <br /> <br />
            <b>Where to store:</b>
            <br /> <br />
            When a valid user is logged in, the server generates/issues a JWT
            token for that client/user
            <br /> <br />
            Later, the server sends the JWT token to the client-side The token
            has to be saved on the client side for repeated use.
            <br /> <br />
            Usually it can be saved in 2 places. 1. local storage or, 2. browser
            HTTP only cookie None of these 2 is a 100% secured process, however,
            comparatively saving in browser HTTP only cookies is more safe.
          </p>
        </div>
      </AnimatedSection>

      {/* question # 2 */}
      <AnimatedSection>
        <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
          <h3 className="text-xl font-bold mb-4 border-b-2 pb-3 border-slate-100">
            B. Comparison between SQL and NoSQL databases.
          </h3>
          <p className="px-8">
          Structured query language (SQL) databases are primarily called RDBMS
            or relational databases.
            <br /> <br />
            On the other hand, NoSQL databases are called non-relational or
            distributed databases. It is a No-declarative query language
            <br /> <br /> <br />
            <b>Differences:</b>
            <br /> <br />
            <b>1.</b>
            <br /> <br />
            SQL databases are table based databases. SQL databases have a
            predefined schema.
            <br /> <br />
            On the contrary, NoSQL databases can be document based, key-value
            pairs, graph databases. NoSQL databases use dynamic schema for
            unstructured data.
            <br /> <br />
            <b>2.</b>
            <br /> <br />
            Some examples of SQL databases are: Oracle, Postgres, MySQL, MS-SQL.
            <br /> <br />
            MongoDB, Redis, Neo4j, Cassandra, Hbase are some of the examples of
            No-SQL databases.
            <br /> <br />
          </p>
        </div>
      </AnimatedSection>

      {/* question # 3 */}
      <AnimatedSection>
        <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
          <h3 className="text-xl font-bold mb-4 border-b-2 pb-3 border-slate-100">
            C. What is express js? What is Nest JS?
          </h3>
          <p className="px-8">
            <b>Express JS:</b>
            <br /> <br />
            Express is a minimal and flexible Node.js web application framework that provides a full-flavored or robust set of features for web and mobile applications.
            <br /> <br />
            Express is a node JS web application framework that provides broad features for building web & mobile applications.
            <br /> <br />
            It is a layer built on the top of the NodeJS that helps manage servers & routers. It is to build a single page, multipage and hybrid web application.
            <br /> <br /> <br />
            <b>Rest JS:</b>
            <br /> <br />
            NestJS is one of the fastest-growing NodeJS frameworks. It is useful in building efficient, scalable, and enterprise-grade backend applications using NodeJS. 
            <br /> <br />
            It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
          </p>
        </div>
      </AnimatedSection>

      {/* question # 4 */}
      <AnimatedSection>
        <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
          <h3 className="text-xl font-bold mb-4 border-b-2 pb-3 border-slate-100">
            D. What is MongoDB aggregate and how does it work?
          </h3>
          <p className="px-8">
            <b>MongoDB Aggregation:</b>
            <br /> <br />
            Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.
            <br /> <br />
            The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
            <br /> <br /> <br />
            <b>The process of Aggregation Pipelines:</b>
            <br /> <br />
            An aggregation pipeline consists of one or more stages that process documents:
            <br /> <br />
            * Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.
            <br /> <br />
            * The documents that are output from a stage are passed to the next stage.
            <br /> <br />
            * An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Blogs;