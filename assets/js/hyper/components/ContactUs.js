import { h, app } from "hyperapp";

export default function ContactUs({ state, actions }) {
  return (
    <section id='ContactUs'>
      <div class='container'>
        <h5 class='comp-title'>Contact US @</h5>
        <h2>Humungo Wings</h2>
        <div class='box'>
          <div class='row'>
            <div class='col-md-7'>
              <div class='title'>{state.companyInfo.location}</div>
              <h6 class='address'>
                1168 Kennedy Road
                <br />
                Scarborough ON M1P 2C1
              </h6>
              <p class='email'>
                <strong>email:</strong>{" "}
                <a href='mailto:info@reallybigwings.com'>
                  info@humungowings.com
                </a>
              </p>
            </div>

            <div class='col-md-5'>
              <h6>Phone:</h6>
              <div class='title'>+1 (416) 555 - 6666</div>
              <h6>Lunch Service:</h6>
              <p>
                Friday, Saturday and Sunday
                <br />
                from 12pm - 1:30pm
              </p>
              <h6>Dinner Service:</h6>
              <p>Daily from 6pm - 9:30pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
