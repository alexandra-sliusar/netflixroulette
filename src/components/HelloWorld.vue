<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      There will be a project that supports following functionalities:
      <ul>
        <li>listing all available movies</li>
        <li>searching for a movie by a title or a genre</li>
        <li>sorting found movies by a release date or a rating</li>
        <li>displaying quantity of found movies</li>
        <li>displaying a movie poster, a title, a genre and a release date for each movie</li>
      </ul>
    </p>
    <p>Hope you'll like it!</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
}
h1 {
  color: #f65261;
}
</style>
