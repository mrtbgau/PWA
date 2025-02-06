<template>
  <div>
    <label for="phoneNumber">Entrez un numéro de téléphone :</label>
    <input
      type="tel"
      id="phoneNumber"
      v-model="phoneNumber"
      placeholder="Ex: 0123456789"
    />
    <button @click="makePhoneCall">Passer l'appel</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "",
    };
  },
  methods: {
    makePhoneCall() {
      if (this.phoneNumber) {
        window.location.href = `tel:${this.phoneNumber}`;
      } else {
        alert("Veuillez entrer un numéro de téléphone valide.");
      }
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles ici si nécessaire */
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

input {
  margin: 10px 0;
  padding: 8px;
  width: 200px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>
