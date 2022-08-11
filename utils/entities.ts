import {
  FNFTCollection,
  FNFTCollectionItem,
  FNFTCollectionItemBidHistory,
  UserFNFTCollection
} from '../generated/schema';
import { BIGDECIMAL_ZERO, BIGINT_ZERO, PUBLIC } from './constants';

export function getOrCreateFNFTCollection(id: string): FNFTCollection {
  let fnftCollection = FNFTCollection.load(id);
  if (fnftCollection === null) {
    fnftCollection = new FNFTCollection(id);
    fnftCollection.count = 0;
    fnftCollection.state = PUBLIC;
  };

  return fnftCollection;
}

export function getOrCreateFNFTCollectionItem(id: string): FNFTCollectionItem {
  let fnftCollectionItem = FNFTCollectionItem.load(id);
  if (fnftCollectionItem === null) {
    fnftCollectionItem = new FNFTCollectionItem(id);
    fnftCollectionItem.state = PUBLIC;
    fnftCollectionItem.latestBid = BIGDECIMAL_ZERO;
    fnftCollectionItem.highestBid = BIGDECIMAL_ZERO;
    fnftCollectionItem.latestBidAt = BIGINT_ZERO;
    fnftCollectionItem.tokenURI = "";
  };

  return fnftCollectionItem;
}

export function getOrCreateFNFTCollectionItemBidHistory(id: string): FNFTCollectionItemBidHistory {
  let fnftCollectionItemBidHistory = FNFTCollectionItemBidHistory.load(id);
  if (fnftCollectionItemBidHistory === null) {
    fnftCollectionItemBidHistory = new FNFTCollectionItemBidHistory(id);
  };

  return fnftCollectionItemBidHistory;
}

export function getOrCreateUserFNFTCollection(id: string): UserFNFTCollection {
  let userFNFTCollection = UserFNFTCollection.load(id);
  if (userFNFTCollection === null) {
    userFNFTCollection = new UserFNFTCollection(id);
    userFNFTCollection.amount = BIGDECIMAL_ZERO;
  };

  return userFNFTCollection;
}