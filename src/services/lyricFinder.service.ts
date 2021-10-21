export interface Meta {
    status: number;
  }
  
  export interface Range {
    start: number;
    end: number;
  }
  
  export interface Highlight {
    property: string;
    value: string;
    snippet: boolean;
    ranges: Range[];
  }
  
  export interface Stats {
    unreviewed_annotations: number;
    concurrents: number;
    hot: boolean;
    pageviews: number;
  }
  
  export interface PrimaryArtist {
    _type: string;
    api_path: string;
    header_image_url: string;
    id: number;
    image_url: string;
    index_character: string;
    is_meme_verified: boolean;
    is_verified: boolean;
    name: string;
    slug: string;
    url: string;
    iq?: number;
  }
  
  export interface Result {
    _type: string;
    annotation_count: number;
    api_path: string;
    full_title: string;
    header_image_thumbnail_url: string;
    header_image_url: string;
    id: number;
    instrumental: boolean;
    lyrics_owner_id: number;
    lyrics_state: string;
    lyrics_updated_at: number;
    path: string;
    pyongs_count: number;
    song_art_image_thumbnail_url: string;
    song_art_image_url: string;
    stats: Stats;
    title: string;
    title_with_featured: string;
    updated_by_human_at: number;
    url: string;
    primary_artist: PrimaryArtist;
  }
  
  export interface Hit {
    highlights: Highlight[];
    index: string;
    type: string;
    result: Result;
  }
  
  export interface Section {
    type: string;
    hits: Hit[];
  }
  
  export interface Response {
    sections: Section[];
    next_page: number;
  }
  
  export interface GeniusSearchLyricsResults {
    meta: Meta;
    response: Response;
  }