export default {
  name: "technologies",
  title: "Technologies",
  type: "document",
  fields: [
    {
      name: "visibility",
      title: "Visibility",
      type: "boolean",
      description: "Technologies wont show on the site without visibility turned on.",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Leave empty for not visible technologies.",
      validation: (Rule) => Rule.min(1).max(8),
    },
    {
      name: "name",
      title: "Technology Name",
      type: "string",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "image",
      title: "Technology Logo",
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
