import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ContentStreamActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { LoadingIndicator, PostTeaser, Error } from 'components';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';

class ContentStream extends Component {
  constructor() {
    super();
    this.loadPosts = this.loadPosts.bind(this);
  }
  componentDidMount() {
    this.loadPosts();
  }
  loadPosts() {
    const {
      loadPostContent,
    } = this.props.actions;
    loadPostContent();
  }
  render() {
    const {
      isLoading,
      posts,
      error,
    } = this.props;
    return (
      <Section className={styles.contentStream} colorIndex="light-2">
        {isLoading ?
          <LoadingIndicator isLoading={isLoading} />
        :
          <div>
            <Heading align="center" tag="h1" margin="large">
              Most Recent Posts
            </Heading>
            <Section>
              {error &&
                <Error
                  error={{
                    message: `{An error as occured ${JSON.stringify(error)}}`,
                  }}
                />
              }
            </Section>
            <Section>
              <Box justify="center" align="center">
                {posts && posts.length > 0 && posts.map(post =>
                  <PostTeaser post={post} />
                )}
              </Box>
            </Section>
          </div>
        }
      </Section>
    );
  }
}

ContentStream.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  posts: PropTypes.array,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  posts: state.contentStream.posts,
  error: state.contentStream.error,
  isLoading: state.contentStream.isLoading,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ContentStreamActionCreators,
    dispatch
  ),
});

const Container = cssModules(ContentStream, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
