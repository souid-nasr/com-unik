import React,{useState} from 'react'
import { AiOutlineDiff,AiOutlineCodeSandbox,AiOutlineFileImage,AiOutlinePrinter } from "react-icons/ai"
function Features() {
    const[showtab, setShowtab]= useState(1);

    const handletab = (e)=>{
     setShowtab(e);
       }
  return (

    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row d-flex">
          <li className="nav-item col-3">
            <button  className= {showtab===1? "nav-link active show": "nav-link" }  onClick={()=>handletab(1)} data-bs-toggle="tab">
              <AiOutlineDiff className="icon"></AiOutlineDiff>
              <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
            </button>
          </li>
          <li className="nav-item col-3">
            <button  data-bs-toggle="tab" className= {showtab===2? "nav-link active show": "nav-link" }  onClick={()=>handletab(2)}>
              <AiOutlineFileImage className="icon"></AiOutlineFileImage>
              <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
            </button>
          </li>
          <li className="nav-item col-3">
            <button className= {showtab===3? "nav-link active show": "nav-link" }  onClick={()=>handletab(3)} data-bs-toggle="tab">
              <AiOutlineCodeSandbox className="icon"></AiOutlineCodeSandbox>
              <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
            </button>
          </li>
          <li className="nav-item col-3">
            <button className= {showtab===4? "nav-link active show": "nav-link" }  onClick={()=>handletab(4)} data-bs-toggle="tab">
              <AiOutlinePrinter className="icon"></AiOutlinePrinter>
              <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div  className= { showtab===1 ? "tab-pane active show":"tab-pane"} id="tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/features-1.png" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          <div className= { showtab===2 ? "tab-pane active show":"tab-pane"} id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/features-2.png" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          <div className= { showtab===3 ? "tab-pane active show":"tab-pane"} id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                </ul>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/features-3.png" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
          <div className= { showtab===4 ? "tab-pane active show":"tab-pane"} id="tab-4">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/features-4.png" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features