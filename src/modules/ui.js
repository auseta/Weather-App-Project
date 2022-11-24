export const ui = () => {
  const appWrapper = document.querySelector('.app-wrapper');
  appWrapper.innerHTML = `
    <div class='header'>
      <h1>MY WEATHER APP</h1>
      <button class='units-button fahrenheit'>DISPLAY °F</button>
      <form>
        <label for='location'>
          <span>LOCATION</span>
          <input type='text' id='location' minlength=5 maxlength=15 required>
        </label>
        <button>search</button>
      </form>
    </div>

    <div class='loading'>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div class='footer'>
      <p>PROJECT MADE IT BY AUGUSTO SETA</p>
    </div>

  `;
};
