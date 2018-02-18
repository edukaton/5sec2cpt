<template>
  <div class="hello ui two column centered grid">
    <div class="column aligned">
      <h1>Internet - czas się bronić!</h1>
      <div class="ui grid icons">
        <img class="icon" src="./../assets/32-office-icons_2.svg">
        <img class="icon" src="./../assets/32-office-icons_5.svg">
        <img class="icon" src="./../assets/32-office-icons_11.svg">
      </div>

      <ul>
        <li>
          <router-link to="/wybor-postaci" class="ui primary button huge">
            Rozpocznij grę
          </router-link>
          <router-link to="/nowy-scenariusz" class="ui primary basic button huge">
            Nowe zagrożenie
          </router-link>
        </li>
      </ul>
      <p class="info">Czy wiesz, że każdego dnia zostawiasz w internecie ślad po swojej aktywności? To mogą być Twoje dane osobowe, ale także gust do ubrań, upodobania żywieniowe lub prywatne zdjęcia. Pozostawione przez Ciebie dane mogą zostać użyte przez osoby, które chcą Ci zaszkodzić. Otaczająca Cię bańka informacyjna może ograniczyć Ci dostęp do różnorodnej wiedzy. Nie daj się! Naucz się bezpiecznie korzystać z internetu!

      </p>
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
h1 {
  font-size: 45px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.icon {
  max-height: 160px;
}
.icons {
  margin-bottom: 50px;
  margin-top: 50px;
}
p.info {
  margin-top: 30px;
  font-size: 1.1em;
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
