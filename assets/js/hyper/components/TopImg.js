import { h, app } from "hyperapp";

export default function TopImg({ state, actions }) {
  console.log(state.companyInfo.title)
  return (
    <section id="TopImg">
      <div class="container">
        <div class="title">
          <h5>Welcome</h5>
          <h1>
            {state.companyInfo.title}
          </h1>
          <div class="contact-info">
          <div class="container">
            <div class="booking">Reserve Table</div>
            <h2>{state.companyInfo.phone}</h2>
            <div class="hours">
              Hours <strong>Mon - Thurs: </strong> 9am - 11pm
              <strong> Weekend: </strong> 9am - 1am
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
