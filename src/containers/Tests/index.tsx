import PlaylistCover from "components/PlaylistCover";
import ScrollableArea from "components/ScrollableArea";
import { testProps } from "./constants";

const Test = () => (
  <ScrollableArea>
    <div
      style={{ border: "1px solid red", paddingTop: "1.5rem" }}
      className="container__fluid"
    >
      <div className="row">
        <div className="col-7 col-md-7 col-sm-6 col-xsm-12">
          <PlaylistCover
            title="Top 100 Morocco"
            type="stacked"
            artists={["Draganov", "ElgrandeToto", "Inkonu"]}
            img={
              "https://static.overlay-tech.com/assets/62108f75-676f-4c17-90b4-f1e17752b68b.png"
            }
          />
        </div>
        <div className="col-5 col-md-5 col-sm-6 col-xsm-12">
          <PlaylistCover
            title="Top 100 Morocco"
            type="stacked"
            artists={["Draganov", "ElgrandeToto", "Inkonu"]}
            img={
              "https://static.overlay-tech.com/assets/62108f75-676f-4c17-90b4-f1e17752b68b.png"
            }
          />
        </div>
        {testProps.map((card, i) => {
          return (
            <div className="col-3 col-lg-4 col-md-4 col-sm-6 col-xsm-12">
              <PlaylistCover key={i} {...card} />
            </div>
          );
        })}
      </div>
    </div>
  </ScrollableArea>
);

export default Test;
