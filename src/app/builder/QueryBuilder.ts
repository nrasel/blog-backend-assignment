import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  searches(searchableField: string[]) {
    const search = this?.query?.search;
    if (search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableField.map(
          (field) =>
            ({
              [field]: { $regex: search, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }
    return this;
  }
  filter() {
    const queryObj = { ...this.query };
    console.log('qObj', queryObj);
    const excludingTerm = ['search', 'page', 'limit', 'sortOrder', 'sortBy'];
    excludingTerm.forEach((key) => delete queryObj[key]);
    console.log('qObjde', queryObj);
    this.modelQuery = this.modelQuery.find({ queryObj } as FilterQuery<T>);
    return this;
  }
  sort() {
    let sortStr;

    if (this?.query?.sortBy && this?.query?.sortOrder) {
      const sortBy = this?.query?.sortBy;
      const sortOrder = this?.query?.sortOrder;
      // "created at"
      sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
    }

    this.modelQuery = this.modelQuery.sort(sortStr);

    return this;
  }

  paginate() {
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }
  fields() {
    const fields =
      (this?.query?.fields as string)?.split(',').join(' ') || '-__v';

    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
}

export default QueryBuilder;
