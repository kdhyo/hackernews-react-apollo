import React, { Component } from "react";
import Link from "./Link";
import { Query } from "react-apollo";
import { gql } from "@apollo/client";

class LinkList extends Component {
  render() {
    const FEED_QUERY = gql`
      query {
        feed {
          links {
            url
            description
          }
        }
      }
    `;
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const linksToRender = data.feed.links;

          return (
            <div>
              {linksToRender.map((link) => (
                <Link key={link.id} link={link} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LinkList;
