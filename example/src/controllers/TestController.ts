import { Get, Queries, Route } from 'tsoa';

export class DateFilter {
  gte?: Date;
  lte?: Date;
}
export class TestFilter {
  id?: string | string[];
  date?: DateFilter;
}

@Route()
export class TestController {
  @Get('/store/test')
  @Queries()
  async test(@Queries() filter: TestFilter): Promise<TestFilter> {
    return filter;
  }
}
