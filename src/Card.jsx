import React from 'react'

function Card({data}) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">{data.duration}</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.userValue? "" : "text-muted"}><span className="fa-li"><i className={data.userValue?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="PLUS" || data.plan==="PRO"?<strong>{data.user}</strong>:data.user}</li>
              <li className={data.storageValue? "" : " text-muted"}><span className="fa-li"><i className={data.storageValue?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.projectValue? "" : "text-muted"}><span className="fa-li"><i className={data.projectValue?"fas fa-check":"fas fa-times"}></i></span>{data.project}</li>
              <li className={data.accessValue? "" : "text-muted"}><span className="fa-li"><i className={data.accessValue?"fas fa-check":"fas fa-times"}></i></span>{data.access}</li>
              <li className={data.privateValue? "" : "text-muted"}><span className="fa-li"><i className={data.privateValue?"fas fa-check":"fas fa-times"}></i></span>{data.private}</li>
              <li className={data.supportValue? "" : "text-muted"}><span className="fa-li"><i className={data.supportValue?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
              <li className={data.subdomainValue? "" : "text-muted"}><span className="fa-li"><i className={data.subdomainValue?"fas fa-check":"fas fa-times"}></i></span>{data.subdomain}</li>
              <li className={data.reportValue? "" : "text-muted"}><span className="fa-li"><i className={data.reportValue?"fas fa-check":"fas fa-times"}></i></span>{data.report}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card