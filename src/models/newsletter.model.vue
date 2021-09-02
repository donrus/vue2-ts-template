<script>
  import request from './request.vue';

  export default {
    async subscribe(email) {
      return request.send('newsletter', 'subscribe', {email});
    },
  };
</script>
