<template>
  <form class="stay-filter ">
    <div class="first">
      <label class="location">
        <div>
          <div>
            <div>Locatin</div>
            <input type="text" placeholder="Where are you going?" />
          </div>
        </div>
      </label>
      <div class="sep"></div>
      <label class="check-in">
        <div>
          <div>
            <div>Check in</div>
            <input type="date" />
          </div>
        </div>
      </label>
      <div class="sep"></div>
      <label class="check-out">
        <div>
          <div>
            <div>Check out</div>
            <input type="date" />
          </div>
        </div>
      </label>
      <div class="sep"></div>
      <label class="guests">
        <div>
          <div>
            <div>Guests</div>
            <input type="text" placeholder="Add guests" />
          </div>
        </div>
      </label>
    </div>
    <button>
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>