<template>
  <div
    class="d-flex flex-row h-100 w-100 justify-content-between overflow-hidden"
  >
    <div class="bar">
      <img
        class="logo p-1"
        src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-cool-funny-chicken-mascot-design-suitable-for-restaurant-logo-or-packaging-png-image_5562210.jpg"
        width="45"
        height="45"
        alt=""
      />
      <div class="item pt-2 pb-2 active"><i class="bi bi-basket"></i></div>
      <div class="item pt-2 pb-2"><i class="bi bi-collection"></i></div>
      <div class="item pt-2 pb-2"><i class="bi bi-gear-fill"></i></div>
    </div>
    <div
      class="menu pt-4 open"
      v-bind:class="{ close: !this.$store.state?.menuState }"
    >
      <div class="title">Orders</div>
      <div class="list d-flex flex-column pt-4 gap-2">
        <div
          class="item d-flex justify-content-between"
          v-bind:class="{ active: this.$route?.query?.filter === 'New' }"
          @click="this.$router.push('/orders?filter=New')"
        >
          <div class="text with-pointer">New Orders</div>
          <div class="value">
            {{ this.$store.state?.statics?.New }}
          </div>
        </div>
        <div
          class="item d-flex justify-content-between"
          v-bind:class="{ active: this.$route?.query?.filter === 'Accepted' }"
          @click="this.$router.push('/orders?filter=Accepted')"
        >
          <div class="text with-pointer">Accepted</div>
          <div class="value">
            {{ this.$store.state?.statics?.Accepted }}
          </div>
        </div>
        <div
          class="item d-flex justify-content-between"
          v-bind:class="{ active: this.$route?.query?.filter === 'Cooking' }"
          @click="this.$router.push('/orders?filter=Cooking')"
        >
          <div class="text with-pointer">Cooking</div>
          <div class="value">
            {{ this.$store.state?.statics?.Cooking }}
          </div>
        </div>
        <div
          class="item d-flex justify-content-between"
          v-bind:class="{ active: this.$route?.query?.filter === 'Ready' }"
          @click="this.$router.push('/orders?filter=Ready')"
        >
          <div class="text with-pointer">Parcel Ready</div>
          <div class="value">
            {{ this.$store.state?.statics?.Ready }}
          </div>
        </div>
        <div
          class="item d-flex justify-content-between"
          v-bind:class="{ active: this.$route?.query?.filter === 'Delivered' }"
          @click="this.$router.push('/orders?filter=Delivered')"
        >
          <div class="text with-pointer">Delivered</div>
          <div class="value">
            {{ this.$store.state?.statics?.Delivered }}
          </div>
        </div>
        <div
          class="item d-flex justify-content-between"
          v-bind:class="{ active: this.$route?.query?.filter === 'Completed' }"
          @click="this.$router.push('/orders?filter=Completed')"
        >
          <div class="text with-pointer">Completed</div>
          <div class="value">
            {{ this.$store.state?.statics?.Completed }}
          </div>
        </div>
      </div>
    </div>
    <div class="p-3 d-flex flex-column h-100 w-100 justify-content-between">
      <div class="header"><Header :title="title" :subTitle="subTitle" /></div>
      <div class="pt-3 d-flex flex-row gap-3 overflow-auto h-100 w-100">
        <div class="d-flex flex-column flex-wrap overflow-auto h-100 w-100">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
export default {
  name: "mdApp",
  components: {
    Header,
    Footer,
  },
  data: () => {
    return {
      a: 1,
      title: "",
      subTitle: "",
    };
  },
  created() {
    this.$store.dispatch("getStatics");
    this.$watch(
      () => this.$route,
      (to, previous) => {
        this.title = to?.name;
        this.subTitle = to.query?.filter;
      }
    );
  },
};
</script>

<style scoped>
.item > .text,
.value {
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
}
.item > .text {
  width: 128px;
}
.item > .value {
}
.item > .text:hover {
  background-color: #dddddd;
  border-radius: 16px;
}
</style>
