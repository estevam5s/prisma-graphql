import { Field, InputType } from '@nestjs/graphql';

import { ArticleUncheckedUpdateManyWithoutAuthorInput } from '../article/article-unchecked-update-many-without-author.input';
import { ArticleUncheckedUpdateManyWithoutFavoritedByInput } from '../article/article-unchecked-update-many-without-favorited-by.input';
import { CommentUncheckedUpdateManyWithoutAuthorInput } from '../comment/comment-unchecked-update-many-without-author.input';
import { UserUncheckedUpdateManyWithoutFollowingInput } from './user-unchecked-update-many-without-following.input';

@InputType()
export class UserUncheckedUpdateWithoutFollowingInput {
    @Field(() => String, { nullable: true })
    userId?: string;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    password?: string;

    @Field(() => String, { nullable: true })
    bio?: string;

    @Field(() => String, { nullable: true })
    image?: string;

    @Field(() => UserUncheckedUpdateManyWithoutFollowingInput, { nullable: true })
    followers?: UserUncheckedUpdateManyWithoutFollowingInput;

    @Field(() => ArticleUncheckedUpdateManyWithoutFavoritedByInput, { nullable: true })
    favoriteArticles?: ArticleUncheckedUpdateManyWithoutFavoritedByInput;

    @Field(() => ArticleUncheckedUpdateManyWithoutAuthorInput, { nullable: true })
    articles?: ArticleUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => CommentUncheckedUpdateManyWithoutAuthorInput, { nullable: true })
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput;
}
