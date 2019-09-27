import { h, app } from "hyperapp";

export default function Header({ state, actions }) {
  return (
    <header>
      <div class='container'>
        <div class='logo'>HUMUNGO WINGS</div>
        <nav>
          <a href='#OurStory'>Our Story</a>
          <a href='#Reviews'>Reviews</a>
          <a href='#SpecialMenu'>Special Menu</a>
          <a href='#Reservations'>Reservations</a>
          <a href='#ContactUs'>Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
