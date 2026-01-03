import { Fragment } from "react";
function ListGroup() {
  return (
    <Fragment>
      <h1>Features</h1>
      <ol className="list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Realtime Parent Tracker</div>
            Content for list item
          </div>
          <span className="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Geofenced route system</div>
            Content for list item
          </div>
          <span className="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Certified Drivers</div>
            Content for list item
          </div>
          <span className="badge text-bg-primary rounded-pill">14</span>
        </li>
      </ol>
    </Fragment>
  );
}

export default ListGroup;
