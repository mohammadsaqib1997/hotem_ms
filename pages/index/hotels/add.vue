<template lang="pug">
    .box
        b-field
            nuxt-link.button.is-info(to="/hotels")
                i.fas.fa-arrow-left
        .title.is-1
            | Add Hotel
        b-field(grouped)
            b-field(label="Name" expanded)
                b-input(type="text" placeholder="Hotel Name")
            b-field(label="Address" expanded)
                b-input(type="text" placeholder="Hotel Address")
            b-field(label="Hotel Chain")
                b-select
                    option Hotel One
                    option Hotel Two
        hr
        .columns
            .column.is-6
                b-field(grouped)
                    b-field(label="Checkin Time" expanded)
                        b-timepicker(icon="clock" placeholder="Hotel Checkin Time" hour-format="12")
                    b-field(label="Checkout Time" expanded)
                        b-timepicker(icon="clock" placeholder="Hotel Checkout Time" hour-format="12")
                b-field
                    b-field(label="Description")
                        b-input(type="textarea" maxlength="200" placeholder="Hotel Description")
            .column.is-6
                b-field(grouped)
                    b-field(label="Country" expanded)
                        b-input(type="text" placeholder="Hotel Country")
                    b-field(label="City" expanded)
                        b-input(type="text" placeholder="Hotel City")
                    b-field(label="Currency")
                        b-select
                            option(value="dolar") DOLLAR
                            option(value="euro") EURO
                b-field(label="Location Geo(Drag Pin)")
                    b-field
                        GmapAutocomplete(classes="input" @place_changed="setPlace")
                b-field
                    GmapMap(:center="mapCenter" :zoom="7" style="width: 100%; height: 200px")
                        GmapMarker(v-for="(m, index) in mapMarkers" :key="index" :position="m.position" :draggable="true")
        hr
        .columns
            .column.is-6
                b-field(grouped)
                    b-field(label="Breakfast" expanded)
                        b-taginput(icon="tags" placeholder="Add what is in Breakfast?")
                    b-field(label="Stars" expanded)
                        .block
                            b-icon.star_ev(icon="star" pack="far" v-for="(item, key) in stars" :key="key")
                            
                    


</template>

<script>
export default {
  mounted() {
    $(function() {
      $(".star_ev").off();
      
    });
  },
  data() {
    return {
      mapCenter: { lat: 10, lng: 10 },
      mapMarkers: [],
      stars: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
      }
    };
  },
  methods: {
    setPlace(place) {
      this.mapCenter = place.geometry.location;
      console.log(place);
    },
    onMove(event) {
      console.log(event);
    }
  }
};
</script>

