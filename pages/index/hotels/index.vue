<template lang="pug">
  .box
    .title.is-1
      | Hotels
    b-field
      nuxt-link.button.is-info(to="/hotels/add") Add Hotel
    b-table(:data="[]" :columns="columns" :hoverable="true" :bordered="true" backend-sorting :default-sort-direction="'desc'" :default-sort="[sortField, sortOrder]")
      template(slot-scope="props")
        b-table-column(field="id" lable="ID" sortable)
          | {{ props.row.id }}
        b-table-column(field="name" lable="Name" sortable)
          | {{ props.row.name }}
      template(slot="empty")
        section.section
          .content.has-text-grey.has-text-centered
            p
              b-icon(icon="frown" size="is-large")
            p Nothing here.
            
</template>

<script>
export default {
  data() {
    return {
      sortField: "id",
      sortOrder: "desc",
      table_data: [],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "name",
          label: "Name"
        }
      ]
    };
  }
};
</script>
