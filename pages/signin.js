import { providers, signIn, getSession, csrfToken } from "next-auth/client";



const Login = ({providers}) => {

    return (
        <div className={""}>
          
          <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
  {Object.values(providers).map((provider) => {
        return (
            <div className={"bg-white md:left-[50%] md:p-[50px] px-[10%] left-[50%]   translate-x-[-50%] translate-y-[-50%] text-center shadow-2xl"}
                style={{
                    position: "absolute",
                    top: "50%",
                    // left: "50%",
                    // transform: "translateX(-50%) translateY(-50%)",
                    borderRadius: "5px",
                    borderRadius: 10
                    
                    
                }}
            >
               <div className="flex flex-col items-center mt-10">                   
              <img
                    className={"cursor-pointer h-[500] w-[640]  sm:w-52 "}
                    src="https://i.pinimg.com/originals/25/d5/f6/25d5f63de2bb8ced1a11ef9dd564a64f.gif"
                /></div>
                <button className="mt-9 md:mb-0 mb-10 text-xs  p-2 mx-auto  bg-red-400 max-width-30 lg:w-60 md:w-40 text-white items-center  focus:hover:ring-2 uppercase text-center rounded-xl py-2 cursor-pointer hover:bg-red-500 transition outline-none
                 duration-200" onClick={() => signIn(provider.id)} >Sign In With {provider.name}</button>
            </div>  
        )
      })}

       
        </div>
    );
}
export default Login

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await providers(context),
      csrfToken: await csrfToken(context),
    },
  };
}