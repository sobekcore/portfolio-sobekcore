// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Next we import objects and documents schemas
import skills from "./skills";
import projects from "./projects";
import others from "./others";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The followings are document types which
    // will appear in the Sanity Studio.
    skills,
    projects,
    others,
  ]),
});
