<template>
  <ol>
    <li>
      <h3><router-link to="/default-slider">Default slider</router-link></h3>
    </li>
    <li>
      <h3>
        <router-link to="/navigation-slider">Navigation slider</router-link>
      </h3>
    </li>
    <li>
      <h3>
        <router-link to="/pagination-slider">Pagination slider</router-link>
      </h3>
    </li>
    <li>
      <h3>
        <router-link to="/coverflow-effect-slider"
          >Coverflow Effect slider</router-link
        >
      </h3>
    </li>
    <li>
      <h3>
        <router-link to="/card-stack-slider">Card Stack slider</router-link>
      </h3>
    </li>
    <li>
      <h3>
        <router-link to="/mouse-wheel-slider">Mouse Wheel slider</router-link>
      </h3>
    </li>
    <li>
      <h3>
        <router-link to="/virtual-slider">Virtual slider</router-link>
      </h3>
    </li>
  </ol>
  <router-view></router-view>
</template>
