<template>
  <div class="hello ui two column centered grid">
    <div class="column aligned">
      <h1>Internet - czas się bronić!</h1>
      <img src="./../assets/landing_img.png">
      <ul>
        <li>
          <router-link to="/wybor-postaci" class="ui primary button">
            Graj
          </router-link>
          <router-link to="/nowy-scenariusz" class="ui primary button">
            Dodaj
          </router-link>
        </li>
      </ul>
      <h5>Czy wiesz, że każdego dnia zostawiasz w internecie ślad po swojej aktywności? To mogą być Twoje dane osobowe, ale także gust do ubrań, upodobania żywieniowe lub prywatne zdjęcia. Pozostawione przez Ciebie dane mogą zostać użyte przez osoby, które chcą Ci zaszkodzić. Otaczająca Cię bańka informacyjna może ograniczyć Ci dostęp do różnorodnej wiedzy. Nie daj się! Naucz się bezpiecznie korzystać z internetu!

      </h5>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Witajcie w naszej bajce'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
