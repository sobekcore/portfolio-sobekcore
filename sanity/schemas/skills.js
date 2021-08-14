export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "visibility",
      title: "Visibility",
      type: "boolean",
      description: "Skills wont show on the site without visibility turned on.",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Leave empty for not visible skills.",
      validation: (Rule) => Rule.min(1).max(8),
    },
    {
      name: "name",
      title: "Skill Name",
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
    {
      name: "image",
      title: "Skill Logo",
      type: "image",
      description: "Image must be the same width as height with some padding around it.",
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
      title: "name",
      media: "image",
      subtitle: "order",
    },
    prepare({ title, media, subtitle }) {
      return {
        title: title,
        media: media,
        subtitle: subtitle <= 8 && subtitle >= 1 ? subtitle : "Number not assigned.",
      };
    },
  },
};
