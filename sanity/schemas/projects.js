export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "visibility",
      title: "Visibility",
      type: "boolean",
      description: "Projects wont show on the site without visibility turned on.",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Leave empty for not visible projects.",
      validation: (Rule) => Rule.min(1).max(8),
    },
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "website_link",
      title: "Website Link",
      type: "string",
    },
    {
      name: "code_link",
      title: "Code Link",
      type: "string",
    },
    {
      name: "image",
      title: "Project Icon",
      type: "image",
      description: "Image size must be exactly 48px / 48px.",
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
