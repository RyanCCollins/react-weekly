import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ContentStreamActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { LoadingIndicator } from 'components';
import Section from 'grommet/components/Section';
import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Tags from 'grommet/components/Tags';
import Tag from 'grommet/components/Tag';

const Post = ({
  post,
}) => (
  <Article>
    <Card className={styles.card}>
      <Box
        colorIndex="light-1"
        pad={{ vertical: 'large', horizontal: 'large' }}
        className={styles.post}
      >
        <Image src={`https://cdn-images-1.medium.com/fit/t/800/240/${post.virtuals.previewImage.imageId}`} />
        <Box
          direction="row"
        >
          <Heading tag="h2">
            {post.title}
          </Heading>
        </Box>
        <Box>
          <Paragraph>
            {post.virtuals.snippet}
          </Paragraph>
        </Box>
        <div className={styles.readMore}>
          <a href={`https://medium.com/react-weekly/${post.uniqueSlug}`} className={styles.readMoreButton}>
            Read more...
          </a>
        </div>
        {post.virtuals.usersBySocialRecommends.length > 0 &&
          <div className={styles.recommendations}>
            <div className={styles.postMeta}>
              Recommended by{' '}
              {post.virtuals.usersBySocialRecommends.map((person, index) =>
                <span>
                  <a href={`https://medium.com/@${person.username}`}>
                    {person.name}{index < post.virtuals.usersBySocialRecommends.length ? ', ' : ''}
                  </a>
                </span>
              )}
            </div>
          </div>
        }
        {post.virtuals.tags && post.virtuals.tags.length > 0 &&
          <Box
            pad={{ vertical: 'medium', horizontal: 'medium' }}
            align="center"
            justify="center"
            wrap
          >
            <Tags>
              {post.virtuals.tags.map(tag =>
                <Anchor href={`https://medium.com/tag/${tag.slug}?source=post`}>
                  <Tag label={tag.name} />
                </Anchor>
              )}
            </Tags>
          </Box>
        }
      </Box>
    </Card>
  </Article>
);

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
                <div>
                  <pre>{JSON.stringify(error, null, 2)}</pre>
                </div>
              }
            </Section>
            <Section>
              <Box justify="center" align="center">
                {posts && posts.length > 0 && posts.map(post =>
                  <Post post={post} />
                )}
              </Box>
              {/* {posts && posts.length > 0 &&
                <div>
                  <pre>
                    {JSON.stringify(posts, null, 2)}
                  </pre>
                </div>
              } */}
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
