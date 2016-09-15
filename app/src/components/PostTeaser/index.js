import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Tags from 'grommet/components/Tags';
import Tag from 'grommet/components/Tag';
import { PlaceholderImage } from 'components';

const PostTeaser = ({
  post,
}) => (
  <Article className={styles.article}>
    <Card className={styles.card}>
      <Box
        colorIndex="light-1"
        pad={{ vertical: 'medium', horizontal: 'large' }}
        className={styles.post}
      >
        <Box align="center" justify="center">
          <Anchor href={`https://medium.com/react-weekly/${post.uniqueSlug}`}>
          {post.virtuals.previewImage.imageId ?
            <Image
              className={styles.postImage}
              responsive
              src={`https://cdn-images-1.medium.com/fit/t/1100/480/${post.virtuals.previewImage.imageId}`}
            />
          :
            <PlaceholderImage size={{ width: 576, height: 251 }} />
          }
          </Anchor>
        </Box>
        <Box className={styles.postHeading}>
          <Anchor href={`https://medium.com/react-weekly/${post.uniqueSlug}`}>
            <Heading tag="h2">
              {post.title}
            </Heading>
          </Anchor>
        </Box>
        <Box className={styles.paragraphContainer}>
          <Paragraph>
            {post.virtuals.snippet}
          </Paragraph>
        </Box>
        <div className={styles.readMore}>
          <Anchor href={`https://medium.com/react-weekly/${post.uniqueSlug}`} className={styles.readMoreButton}>
            Read more...
          </Anchor>
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
            <Tags className={styles.tagsList}>
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

PostTeaser.propTypes = {
  post: PropTypes.object.isRequired,
};

export default cssModules(PostTeaser, styles);
