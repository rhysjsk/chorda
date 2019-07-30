<template>
  <!-- Footer -->
  <div id="footer">
    <b-container>
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row>
        <b-col cols="6">
          <div>Chorda has been made to help me learn a little more about music, and of course to practice my chords. If you notice anything that isn't quite right, or if you've got any thoughts or feedback, please send me a line</div>
          <div>rhys@chorda.com</div>
        </b-col>
        <b-col cols="3">
          <div>I'd like to credit the following js libraries</div>
        </b-col>
        <b-col cols="3">
          <div>And the following blog authors for their amazing help</div>
        </b-col>
      </b-row>
    </b-container>
</div>
</template>

<script>
export default {
  name: 'FooterPage',
  components: {
  }
}
</script>
<style>

#footer {
  background-color:#c8c8c8;
  padding:20px
}

</style>
