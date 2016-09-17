import ContentStreamContainer, { ContentStream } from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import React from 'react';
import Section from 'grommet/components/Section';
import { initialState } from '../reducer';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const post = {
  "id": "dc04e3f08543",
  "versionId": "253483a87f01",
  "creatorId": "bcc0b1e6ca00",
  "homeCollectionId": "955bdba6e52f",
  "title": "Embracing Immutable Architecture",
  "detectedLanguage": "en",
  "latestVersion": "253483a87f01",
  "latestPublishedVersion": "253483a87f01",
  "hasUnpublishedEdits": false,
  "latestRev": 743,
  "createdAt": 1472837938612,
  "updatedAt": 1473621066957,
  "acceptedAt": 0,
  "firstPublishedAt": 1472840701889,
  "latestPublishedAt": 1473621066957,
  "vote": true,
  "experimentalCss": "",
  "displayAuthor": "",
  "virtuals": {
    "statusForCollection": "APPROVED",
    "createdAtRelative": "14 days ago",
    "updatedAtRelative": "5 days ago",
    "acceptedAtRelative": "",
    "createdAtEnglish": "September 2, 2016",
    "updatedAtEnglish": "September 11, 2016",
    "acceptedAtEnglish": "",
    "firstPublishedAtEnglish": "September 2, 2016",
    "latestPublishedAtEnglish": "September 11, 2016",
    "allowNotes": true,
    "snippet": "I believe as a community, many of us JavaScript engineers have embraced Immutable Architecture. Whether we realize it or not, a new way of…",
    "previewImage": {
      "imageId": "1*De-cn--751z3cHRlMiXJDw.png",
      "filter": "",
      "backgroundSize": "",
      "originalWidth": 934,
      "originalHeight": 531,
      "strategy": "resample",
      "height": 0,
      "width": 0
    },
    "wordCount": 1150,
    "imageCount": 2,
    "readingTime": 4.722955974842768,
    "subtitle": "I believe as a community, many of us JavaScript engineers have embraced Immutable Architecture. Whether we realize it or not, a new way of…",
    "userPostRelation": {
      "userId": "bcc0b1e6ca00",
      "postId": "dc04e3f08543",
      "readAt": 1473621067371,
      "readLaterAddedAt": 0,
      "votedAt": 1472895834011,
      "collaboratorAddedAt": 0,
      "notesAddedAt": 0,
      "subscribedAt": 0,
      "lastReadSectionName": "03ed",
      "lastReadVersionId": "253483a87f01",
      "lastReadAt": 1473621112623,
      "lastReadParagraphName": "af8a",
      "lastReadPercentage": 0.94,
      "viewedAt": 1473980563852,
      "presentedCountInResponseManagement": 0
    },
    "publishedInCount": 1,
    "usersBySocialRecommends": [{
      "userId": "3d9fdda27252",
      "name": "Drew Tipson",
      "username": "dtipson",
      "createdAt": 1374088657468,
      "lastPostCreatedAt": 1473770203411,
      "imageId": "0*fXlsEHuKuFem15wu.jpeg",
      "backgroundImageId": "1*0decWnXk3x3Nkrw9DBVz6w.gif",
      "bio": "Primarily Javascript, potentially personal, possibly pointless. I welcome and am fascinated by your many marvelous opinions.",
      "twitterScreenName": "dtipson",
      "facebookAccountId": "596511901",
      "allowNotes": 1,
      "type": "User"
    }, {
      "userId": "8f95ee1a7c46",
      "name": "Gabriele Cimato",
      "username": "gabriele.cimato",
      "createdAt": 1455220102222,
      "lastPostCreatedAt": 1471837044536,
      "imageId": "0*Z-Q502YtRJo-g2A7.jpg",
      "backgroundImageId": "",
      "bio": "",
      "twitterScreenName": "",
      "facebookAccountId": "",
      "allowNotes": 1,
      "type": "User"
    }, {
      "userId": "756fa112f0f9",
      "name": "Mikael M",
      "username": "mikaelm1013",
      "createdAt": 1471634800405,
      "lastPostCreatedAt": 1473818166569,
      "imageId": "1*0xvOsnS40xUIV-Ka87f66g.jpeg",
      "backgroundImageId": "",
      "bio": "A CS student with an interest in iOS development and machine learning.",
      "twitterScreenName": "mm3981",
      "facebookAccountId": "",
      "allowNotes": 1,
      "type": "User"
    }],
    "latestPublishedAtAbbreviated": "Sep 11",
    "firstPublishedAtAbbreviated": "Sep 2",
    "emailSnippet": "building apps has crept into the mainstream JavaScript ecosystem and it is here to stay.\n\nWhat is Immutable Architecture, anyways?\n\nTo understand immutable architecture, we need to first understand state. State, an evil source of complexity in any software, is the characteristic of a value. According to Miriam Webster, state is defined as “the particular condition that someone or something is in at a specific time.”",
    "recommends": 30,
    "isBookmarked": false,
    "tags": [{
      "slug": "javascript",
      "name": "JavaScript",
      "postCount": 15475,
      "virtuals": {
        "isFollowing": true
      },
      "metadata": {
        "followerCount": 17100,
        "postCount": 15475,
        "coverImage": {
          "id": "1*AM83LP9sGGjIul3c5hIsWg.png",
          "originalWidth": 5100,
          "originalHeight": 2264
        }
      },
      "type": "Tag"
    }, {
      "slug": "react",
      "name": "React",
      "postCount": 3013,
      "virtuals": {
        "isFollowing": true
      },
      "metadata": {
        "followerCount": 5991,
        "postCount": 3013,
        "coverImage": {
          "id": "1*51SBnuBFxAGu9Vpw8V8KNA.png",
          "originalWidth": 1592,
          "originalHeight": 838,
          "isFeatured": true
        }
      },
      "type": "Tag"
    }, {
      "slug": "immutable-infrastructure",
      "name": "Immutable Infrastructure",
      "postCount": 5,
      "virtuals": {
        "isFollowing": false
      },
      "metadata": {
        "followerCount": 3,
        "postCount": 5,
        "coverImage": {
          "id": "1*X9QHbRm4Zc0DRPd3FyygkA.png",
          "originalWidth": 2454,
          "originalHeight": 852
        }
      },
      "type": "Tag"
    }, {
      "slug": "functional-programming",
      "name": "Functional Programming",
      "postCount": 1028,
      "virtuals": {
        "isFollowing": false
      },
      "metadata": {
        "followerCount": 2718,
        "postCount": 1028,
        "coverImage": {
          "id": "1*AM83LP9sGGjIul3c5hIsWg.png",
          "originalWidth": 5100,
          "originalHeight": 2264
        }
      },
      "type": "Tag"
    }],
    "socialRecommendsCount": 3,
    "responsesCreatedCount": 0,
    "links": {
      "entries": [{
        "url": "https://medium.com/search?q=functional%20javascript",
        "alts": [{
          "type": 2,
          "url": "medium://search"
        }, {
          "type": 3,
          "url": "medium://search"
        }]
      }, {
        "url": "https://vimeo.com/166790294",
        "alts": [{
          "type": 2,
          "url": "vimeo://app.vimeo.com/videos/166790294"
        }, {
          "type": 3,
          "url": "vimeo://app.vimeo.com/videos/166790294"
        }]
      }, {
        "url": "https://medium.com/search?q=immutable%20architecture",
        "alts": [{
          "type": 3,
          "url": "medium://search"
        }, {
          "type": 2,
          "url": "medium://search"
        }]
      }, {
        "url": "https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.wsv7amxfq",
        "alts": [{
          "type": 2,
          "url": "medium://p/997b0d933dbc"
        }, {
          "type": 3,
          "url": "medium://p/997b0d933dbc"
        }]
      }],
      "version": "0.3",
      "generatedAt": 1473621067255
    },
    "isLockedPreviewOnly": false
  },
  "coverless": true,
  "slug": "embracing-immutable-architecture",
  "translationSourcePostId": "",
  "translationSourceCreatorId": "",
  "isApprovedTranslation": false,
  "inResponseToPostId": "",
  "inResponseToRemovedAt": 0,
  "isTitleSynthesized": true,
  "allowResponses": true,
  "importedUrl": "",
  "importedPublishedAt": 0,
  "visibility": 0,
  "uniqueSlug": "embracing-immutable-architecture-dc04e3f08543",
  "previewContent": {
    "bodyModel": {
      "paragraphs": [{
        "name": "3d3b",
        "type": 4,
        "text": "",
        "markups": [],
        "layout": 9,
        "metadata": {
          "id": "1*De-cn--751z3cHRlMiXJDw.png",
          "originalWidth": 934,
          "originalHeight": 531
        }
      }, {
        "name": "a993",
        "type": 3,
        "text": "Embracing Immutable Architecture",
        "markups": [],
        "alignment": 1
      }, {
        "name": "bd57",
        "type": 1,
        "text": "I believe as a community, many of us JavaScript engineers have embraced Immutable Architecture…",
        "markups": [],
        "alignment": 1
      }],
      "sections": [{
        "startIndex": 0
      }]
    },
    "isFullContent": false
  },
  "license": 0,
  "inResponseToMediaResourceId": "",
  "canonicalUrl": "",
  "approvedHomeCollectionId": "955bdba6e52f",
  "newsletterId": "",
  "webCanonicalUrl": "",
  "mediumUrl": "",
  "migrationId": "",
  "notifyFollowers": true,
  "notifyTwitter": true,
  "isSponsored": false,
  "isRequestToPubDisabled": false,
  "notifyFacebook": false,
  "responseHiddenOnParentPostAt": 0,
  "type": "Post"
}],
"error": null,
"isLoading": false
},
"landing": {
"isSubmitting": false,
"didSubmit": false,
"error": null,
"message": null,
"isShowingModal": false,
"modalMessage": "",
"isLoaded": true
},
"routing": {
"locationBeforeTransitions": {
  "pathname": "/",
  "search": "",
  "hash": "",
  "state": null,
  "action": "POP",
  "key": "ay7vtb",
  "query": {},
  "$searchBase": {
    "search": "",
    "searchBase": ""
  }
}
},
"form": {}
}
}, {
"state": {
"contentStream": {
"posts": [{
  "id": "aafb57589995",
  "versionId": "f8ccc1f8b6b4",
  "creatorId": "a158ea836ddb",
  "homeCollectionId": "955bdba6e52f",
  "title": "Angular to React: tips on a smooth migration",
  "detectedLanguage": "en",
  "latestVersion": "f8ccc1f8b6b4",
  "latestPublishedVersion": "f8ccc1f8b6b4",
  "hasUnpublishedEdits": false,
  "latestRev": 234,
  "createdAt": 1473872762112,
  "updatedAt": 1473921977600,
  "acceptedAt": 0,
  "firstPublishedAt": 1473873054900,
  "latestPublishedAt": 1473873078354,
  "vote": true,
  "experimentalCss": "",
  "displayAuthor": "",
  "virtuals": {
    "statusForCollection": "APPROVED",
    "createdAtRelative": "2 days ago",
    "updatedAtRelative": "a day ago",
    "acceptedAtRelative": "",
    "createdAtEnglish": "September 14, 2016",
    "updatedAtEnglish": "September 15, 2016",
    "acceptedAtEnglish": "",
    "firstPublishedAtEnglish": "September 14, 2016",
    "latestPublishedAtEnglish": "September 14, 2016",
    "allowNotes": true,
    "snippet": "AngularJS is a pretty cool framework by Google — it provides many great features, like routing and two-way data binding. We used it to…",
    "previewImage": {
      "imageId": "0*wS3gahM1NfLJpTof.jpg",
      "filter": "",
      "backgroundSize": "",
      "originalWidth": 700,
      "originalHeight": 500,
      "strategy": "resample",
      "height": 0,
      "width": 0
    },
    "wordCount": 1117,
    "imageCount": 8,
    "readingTime": 5.3484276729559745,
    "subtitle": "AngularJS is a pretty cool framework by Google — it provides many great features, like routing and two-way data binding. We used it to…",
    "userPostRelation": {
      "userId": "bcc0b1e6ca00",
      "postId": "aafb57589995",
      "readAt": 1473921978394,
      "readLaterAddedAt": 0,
      "votedAt": 1473899526556,
      "collaboratorAddedAt": 0,
      "notesAddedAt": 0,
      "subscribedAt": 0,
      "lastReadSectionName": "1998",
      "lastReadVersionId": "f8ccc1f8b6b4",
      "lastReadAt": 1473921989392,
      "lastReadParagraphName": "38e4",
      "lastReadPercentage": 0.01,
      "viewedAt": 1473959552961,
      "presentedCountInResponseManagement": 0
    },
    "publishedInCount": 1,
    "usersBySocialRecommends": [{
      "userId": "756fa112f0f9",
      "name": "Mikael M",
      "username": "mikaelm1013",
      "createdAt": 1471634800405,
      "lastPostCreatedAt": 1473818166569,
      "imageId": "1*0xvOsnS40xUIV-Ka87f66g.jpeg",
      "backgroundImageId": "",
      "bio": "A CS student with an interest in iOS development and machine learning.",
      "twitterScreenName": "mm3981",
      "facebookAccountId": "",
      "allowNotes": 1,
      "type": "User"
    }],
    "latestPublishedAtAbbreviated": "Sep 14",
    "firstPublishedAtAbbreviated": "Sep 14",
    "emailSnippet": "create the first version of our platform, but today, we see its limits and want to migrate our platform to ReactJS.\n\nAngular helps creating single page applications and renders the content on the client-side, but is utterly bad in terms of SEO referencing. We want to have something that renders our content on the server-side at the first load, but provides the experience of the SPA applications after that: an isomorphic app.",
    "recommends": 4,
    "isBookmarked": false,
    "tags": [{
      "slug": "react",
      "name": "React",
      "postCount": 3013,
      "virtuals": {
        "isFollowing": true
      },
      "metadata": {
        "followerCount": 5991,
        "postCount": 3013,
        "coverImage": {
          "id": "1*51SBnuBFxAGu9Vpw8V8KNA.png",
          "originalWidth": 1592,
          "originalHeight": 838,
          "isFeatured": true
        }
      },
      "type": "Tag"
    }, {
      "slug": "javascript",
      "name": "JavaScript",
      "postCount": 15475,
      "virtuals": {
        "isFollowing": true
      },
      "metadata": {
        "followerCount": 17100,
        "postCount": 15475,
        "coverImage": {
          "id": "1*AM83LP9sGGjIul3c5hIsWg.png",
          "originalWidth": 5100,
          "originalHeight": 2264
        }
      },
      "type": "Tag"
    }, {
      "slug": "web-development",
      "name": "Web Development",
      "postCount": 20036,
      "virtuals": {
        "isFollowing": false
      },
      "metadata": {
        "followerCount": 18810,
        "postCount": 20036,
        "coverImage": {
          "id": "1*0nJYGbjwV7Ifj8hYQp43Qw.jpeg",
          "originalWidth": 1920,
          "originalHeight": 675
        }
      },
      "type": "Tag"
    }, {
      "slug": "coding",
      "name": "Coding",
      "postCount": 4739,
      "virtuals": {
        "isFollowing": false
      },
      "metadata": {
        "followerCount": 6554,
        "postCount": 4739,
        "coverImage": {
          "id": "1*zVTfzYbzaptZwLBpzQjzkA.jpeg",
          "originalWidth": 1280,
          "originalHeight": 720
        }
      },
      "type": "Tag"
    }, {
      "slug": "angular",
      "name": "Angular",
      "postCount": 87,
      "virtuals": {
        "isFollowing": false
      },
      "metadata": {
        "followerCount": 181,
        "postCount": 87,
        "coverImage": {
          "id": "1*1mnuBFkslw57jIZVDU2j1A.png",
          "originalWidth": 1920,
          "originalHeight": 1080
        }
      },
      "type": "Tag"
    }],
    "socialRecommendsCount": 1,
    "responsesCreatedCount": 0,
    "links": {
      "entries": [{
        "url": "https://medium.com/@RecastAI/datasets-the-gold-of-machine-learning-17bea3a70ef1#.oewlpuws7",
        "alts": [{
          "type": 2,
          "url": "medium://p/17bea3a70ef1"
        }, {
          "type": 3,
          "url": "medium://p/17bea3a70ef1"
        }]
      }],
      "version": "0.3",
      "generatedAt": 1473873078722
    },
    "isLockedPreviewOnly": false
  },
  "coverless": true,
  "slug": "angular-to-react-tips-on-a-smooth-migration",
  "translationSourcePostId": "",
  "translationSourceCreatorId": "",
  "isApprovedTranslation": false,
  "inResponseToPostId": "",
  "inResponseToRemovedAt": 0,
  "isTitleSynthesized": true,
  "allowResponses": true,
  "importedUrl": "",
  "importedPublishedAt": 0,
  "visibility": 0,
  "uniqueSlug": "angular-to-react-tips-on-a-smooth-migration-aafb57589995",
  "previewContent": {
    "bodyModel": {
      "paragraphs": [{
        "name": "5ede",
        "type": 3,
        "text": "Angular to React: tips on a smooth migration",
        "markups": [],
        "alignment": 1
      }, {
        "name": "38e4",
        "type": 4,
        "text": "",
        "markups": [],
        "layout": 9,
        "metadata": {
          "id": "0*wS3gahM1NfLJpTof.jpg",
          "originalWidth": 700,
          "originalHeight": 500
        }
      }, {
        "name": "3b4e",
        "type": 1,
        "text": "AngularJS is a pretty cool framework by Google — it provides many great features…",
        "markups": [{
          "type": 3,
          "start": 0,
          "end": 9,
          "href": "https://angularjs.org/",
          "title": "",
          "rel": "",
          "anchorType": 0
        }],
        "alignment": 1
      }],
      "sections": [{
        "startIndex": 0
      }]
    },
    "isFullContent": false
  },
  "license": 0,
  "inResponseToMediaResourceId": "",
  "canonicalUrl": "",
  "approvedHomeCollectionId": "955bdba6e52f",
  "newsletterId": "",
  "webCanonicalUrl": "",
  "mediumUrl": "",
  "migrationId": "",
  "notifyFollowers": true,
  "notifyTwitter": false,
  "isSponsored": false,
  "isRequestToPubDisabled": false,
  "notifyFacebook": false,
  "responseHiddenOnParentPostAt": 0,
  "type": "Post"
};

describe('<ContentStream />', () => {
  it('should render with expected DOM', () => {
    const wrapper = shallow(<ContentStream />);
    expect(wrapper.find('h1')).toExist();
    expect(wrapper.find(<Section />)).toExist();
  });
  it('should render a connected container with default props', () => {
    const store = mockStore({ contentStream: initialState });
    const wrapper = shallow(<ContentStreamContainer store={store} />);
    expect(wrapper.props().isLoading).toBe(false);
    expect(wrapper.props().error).toNotExist();
    expect(wrapper.props().posts.length).toBe(0);
  });
  it('should render posts when included', () => {
    const store = mockStore({
      contentStream: Object.assign({}, initialState, {
        posts: [post],
      }),
    });
    const wrapper = (<contentStreamReducer store={store} />);
    expect(wrapper.find('article').length).toBeGreaterThan(1);
    expect(wrapper.find('.grommetux-tag').length).toBeGreaterThan(1);
  });
  it('should show an error', () => {
    const store = mockStore({
      contentStream: Object.assign({}, initialState, {
        error: new Error('An error has occured'),
      }),
    });
    const wrapper = (<ContentStreamReducer store={store} />);
    expect(wrapper.find('.grommetux-notification__message').length).toBe(1);
  });
});
