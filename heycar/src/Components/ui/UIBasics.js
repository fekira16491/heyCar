import hero from "../../Images/img_hero.jpg";
import { Typography, Paper, Stack, Box } from "@mui/material";
import Briyan from "../../Images/img_brian_circle.png";
import Lisa from "../../Images/img_lisa_circle.png";
import Danielle from "../../Images/img_danielle_circle.png";
const UIBasics = () => {
  return (

<div style={{ display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"baseline",backgroundColor:"red"}}>
  <div  style={{backgroundColor:"green",display:"flex"}}>One</div>
  <div style={{backgroundColor:"violet" ,display:"flex"}}> Two</div>
  <div style={{backgroundColor:"blue" ,display:"flex"}}>Three
  <br/>

    analytics
    <br/>
    adjads
    <br/>
    adjads

  </div>
  </div>
      /* <head></head>
      <body>
        <header>
          <ul>
            <li>Nav1</li>
            <li>Nav2</li>
            <li>Nav3</li>
            <li>Nav4</li>
          </ul>
        </header>

        <main>
          <div className="firstBox">
            <div className="imgBox">
              <img
                src={Briyan}
                style={{
                  width: "100%",
                  minWidth: "70px",
                  paddingRight: "20px",
                }}
                alt="logo"
                backgroundColor="yellow"
              />
              <img
                src={Lisa}
                alt="logo"
                style={{
                  width: "100%",
                  minWidth: "50px",
                  paddingRight: "20px",
                }}
                backgroundColor="pink"
              />
              <img
                src={Danielle}
                alt="logo"
                style={{
                  width: "100%",
                  minWidth: "50px",
                }}
                backgroundColor="blue"
              />
            </div>
            <div className="box">Box1</div>
            <div className="box">Box2</div>
          </div>

          <div className="secondBox">
            <div className="imgBox">
              <img
                src={Briyan}
                style={{
                  width: "100%",
                  minWidth: "70px",
                  paddingRight: "20px",
                }}
                alt="logo"
                backgroundColor="yellow"
              />
              <img
                src={Lisa}
                alt="logo"
                style={{
                  width: "100%",
                  minWidth: "50px",
                  paddingRight: "20px",
                }}
                backgroundColor="pink"
              />
              <img
                src={Danielle}
                alt="logo"
                style={{
                  width: "100%",
                  minWidth: "50px",
                }}
                backgroundColor="blue"
              />
            </div>
            <div className="box">Box1</div>
            <div className="box">Box2</div>
          </div>
        </main>

        <footer>ui</footer>
      </body> */
    //</html>
    // <html>
    //   <head>
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //   </head>
    //   <body>
    //     <header>
    //       <img
    //         src={hero}
    //         alt="backgroundImage"
    //         style={{
    //           height: "100%",
    //           width: "100%",
    //           display: "flex",
    //           flexGrow: 1,
    //           objectfit: "cover",
    //           objectPosition: "50% 50%",
    //         }}
    //       />
    //       <Typography
    //         style={{
    //           position: "absolute",
    //           alignSelf: "strech",
    //           top: "10%",
    //         }}
    //         sx={{
    //           fontSize: {
    //             xxs: 70,
    //             xs: 70,
    //             sm: 80,
    //             md: 85,
    //             lg: 90,
    //             xl: 90,
    //           },
    //         }}
    //       >
    //         Hello,its weird{" "}
    //       </Typography>
    //       <Stack
    //         direction="row"
    //         display="flex"
    //         justifyContent="center"
    //         position="absolute"
    //         top="40%"
    //         width="100%"
    //         spacing={6}
    //       >
    //         <img
    //           src={Briyan}
    //           style={{
    //             maxWidth: "100%",
    //             height: "auto",
    //           }}
    //           alt="logo"
    //           backgroundColor="yellow"
    //         />
    //         <img
    //           src={Lisa}
    //           alt="logo"
    //           style={{
    //             maxWidth: "100%",
    //             height: "auto",
    //           }}
    //           backgroundColor="pink"
    //         />
    //         <img
    //           src={Danielle}
    //           alt="logo"
    //           style={{
    //             maxWidth: "100%",
    //             height: "auto",
    //           }}
    //           backgroundColor="blue"
    //         />
    //       </Stack>
    //     </header>
    //     <div id="main">
    //       <article>article</article>
    //       <nav>Nav</nav>
    //       <aside>Aside</aside>
    //     </div>
    //   </body>
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       backgroundColor: "blue",
    //       minHeight: "100vh",
    //       margin: 0,
    //     }}
    //   >

    //   </div>
    // </html>
  );
};

export default UIBasics;
