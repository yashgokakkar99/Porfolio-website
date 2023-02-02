import dh from "./assets/Projects/datahub.png";
import als from "./assets/Projects/allsecure.png";
import imb from "./assets/Projects/importblogs.png";
import map2p from "./assets/Projects/map2procoder.png";

const Projects = () => {
  return (
    <div className="project-content bg-slate-700 h-auto">
      <div className="projects grid-cols-2 gap-6">
        <div className="datahub border-4 w-auto">
          <div className="dimg">
            <img src={dh} className="h-32  w-52"></img>
          </div>
          <div className="ph">
            <h1>DataHub</h1>
          </div>
          <div className="pdesc">
            <h1>ksfbdfbdsjfsdfsbksfskfdsb</h1>
          </div>
          <button>
            Visit
          </button>
        </div>
        <div className="allSecure border-4 w-auto">
          <div className="asimg">
            <img src={als} className="h-32 w-52"></img>
          </div>
          <div className="ph">
            <h1>DataHub</h1>
          </div>
          <div className="pdesc">
            <h1>ksfbdfbdsjfsdfsbksfskfdsb</h1>
          </div>
          <button>
            Visit
          </button>
        </div>
        <div className="map2procoder border-4">
          <div className="m2pimg">
            <img src={map2p} className="h-32 w-52"></img>
          </div>
          <div className="ph">
            <h1>DataHub</h1>
          </div>
          <div className="pdesc">
            <h1>ksfbdfbdsjfsdfsbksfskfdsb</h1>
          </div>
          <button>
            Visit
          </button>
        </div>
        <div className="importblog border-4">
          <div className="imbimg">
            <img src={imb} className="h-32 w-52"></img>
          </div>
          <div className="ph">
            <h1>DataHub</h1>
          </div>
          <div className="pdesc">
            <h1>ksfbdfbdsjfsdfsbksfskfdsb</h1>
          </div>
          <button>
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
