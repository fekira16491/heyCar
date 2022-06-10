import React from "react";
import Lisa from "../../Images/img_lisa_circle.png";

const StandardDashboard = () => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" />
      </head>
      <body>
        <header className="bg-light text-center">
          <div className="container container--narrow">
            <p>Loren,asdasdas asdas</p>
            <h1>Responsive Layout without struggle made easy.</h1>
          </div>
        </header>
        <section>
          <h2 className="text-center">Quality Design</h2>
          <div className="container">

          <div className="Split">
            <div>
              <p>
                Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask kasd
                akjkadj ka  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask kasd
                akjkadj ka  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask kasd
                akjkadj ka  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask kasd
                akjkadj ka
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask kasd
                akjkadj ka  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask kasd
                akjkadj ka  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask kasd
                akjkadj ka
              </p>
            </div>
          </div>
          </div>

        </section>
        <section className="bg-primary">
          <div className="container">
            <div className="Split">
              <div>
                <h2>Made Custom for you</h2>
                <p>
                Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask
                  kasd akjkadj ka  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask
                  kasd akjkadj ka  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask
                  kasd akjkadj ka  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask
                  kasd akjkadj ka
                </p>
              </div>
              <div>
                <img src={Lisa} alt="adsad"></img>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-accent">
        <div className="container">
            <div className="Split">
            <div>
                <img src={Lisa} alt="adsad"></img>
              </div>
              <div>
                <h2>Made Custom for you</h2>
                <p>
                  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask
                  kasd akjkadj ka  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask
                  kasd akjkadj ka  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask
                  kasd akjkadj ka  Lorem ipsum kasjd akdjas kasjdjs askdjhasd khajdh asakdjask
                  kasd akjkadj ka
                </p>
              </div>
             
            </div>
          </div>
        </section>
      </body>
    </html>
  );
};

export default StandardDashboard;
