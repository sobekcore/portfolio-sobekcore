export default {
  name: "others",
  title: "Others",
  type: "document",
  fields: [
    {
      name: "visibility",
      title: "Visibility",
      type: "boolean",
      description: "Other section wont show on the site without visibility turned on.",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Leave empty for not visible sections.",
      validation: (Rule) => Rule.min(1).max(8),
    },
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "icon",
      title: "Material Icon",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Order",
      name: "sortorder",
      by: [
        {
          field: "order",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "order",
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle <= 8 && subtitle >= 1 ? subtitle : "Number not assigned.",
      };
    },
  },
};
