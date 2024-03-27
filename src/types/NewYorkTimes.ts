export type NewYorkTimesMultimedia = {
  rank: number;
  subtype: string;
  caption: null | string;
  credit: null | string;
  type: string;
  url: string;
  height: number;
  width: number;

  subType: string;
  crop_name: string;
};

export type NewyorkTimesHeadline = {
  main: string;
  kicker: string;
  content_kicker: string;
  print_headline: string;
  name: string;
  seo: string;
  sub: string;
};

export type NewYorkTimesArticle = {
  web_url: string;
  snippet: string;
  print_page: number;
  print_section: string;
  source: string;
  abstract: string;
  lead_paragraph: string;
  multimedia: NewYorkTimesMultimedia[];
  headline: NewyorkTimesHeadline;
  pub_date: string;
        document_type: string;
        news_desk: string;
        section_name: string;
        
        type_of_material: string;
        _id: string;
        word_count: string;
        uri: string;
};

export type NewYorkTimesResponseDocs = {
  docs: NewYorkTimesArticle[];
};

export type NewYorkTimesResponse = {
  response: NewYorkTimesResponseDocs;
};

export type NewYorkTimesResponseBody = {
  status: string;
  copyright: string;
} & NewYorkTimesResponse;

export type NewYorkTimesQueryParams = Partial<{
    begin_date: string;
    end_date: string;
    fl: string;
    fq: string;
    page: string;
    q: string;
    sort: string
}>