# MyCamp

このプロジェクトは以下を参考に作成し、学習目的で改変を加えたものです：

- Udemy 講座 [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/)
- [@kenfdev/YelpCamp-ja](https://github.com/kenfdev/YelpCamp-ja)

## 概要

シンプルで使いやすいキャンプ場情報共有プラットフォームです。  
キャンプ場の基本情報とユーザーレビューを通じて、キャンパー同士で情報を共有できます。

## 現在実装済みの機能

### 🔹 キャンプ場情報の管理

- 一覧表示：全てのキャンプ場を表示
- 詳細表示：個別のキャンプ場の詳細情報を表示
- 新規作成：新しいキャンプ場を登録（タイトル、画像 URL、価格、説明、場所）
- 編集：既存のキャンプ場情報を更新
- 削除：キャンプ場の削除

### 🔹 レビュー機能

- レビューの投稿：各キャンプ場にレビューを追加
- レビューの削除：投稿したレビューの削除
- キャンプ場とレビューの関連付け
- キャンプ場削除時の関連レビューの一括削除

### 🔹 データ検証・エラーハンドリング

- Joi を用いたバリデーション（キャンプ場・レビュー）
- カスタムエラークラスを使ったエラーハンドリング

## 改善予定の機能

- [ ] 検索機能の追加
  - キャンプ場名での検索
  - シンプルで使いやすい検索インターフェース

## 使用技術

- Node.js
- Express
- MongoDB（※ローカル環境で使用中）
- EJS（テンプレートエンジン）
- Joi（バリデーション）
- Method Override（HTTP メソッドの拡張）

## セットアップ手順（開発環境用）

### ✅ 必要条件

- Node.js（v18 以上推奨）
- MongoDB（ローカルで実行できる環境）

### ✅ 手順

1. リポジトリをクローン：

   ```bash
   git clone git@github.com:IchikaCoding/MyCamp-v1.git
   cd MyCamp-v1
   ```

2. パッケージをインストール：

   ```bash
   npm install
   ```

3. MongoDB を起動（ローカル）：

   ```bash
   mongod
   ```

4. アプリケーションを起動：

   ```bash
   node app.js
   ```

   ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスしてください。

## ⚠️ 注意事項

> 現在、本アプリのデータベースは **ローカル環境の MongoDB** を使用しています。  
> そのため、他の環境では MongoDB に接続できず、アプリが正常に動作しない可能性があります。  
> 今後、MongoDB Atlas などのクラウド環境への対応を予定しています。

## 🕘 更新履歴

- **2025/03/28**
  - `YelpCamp/` ディレクトリの中身をルート直下に移動し、フォルダ構成を整理
  - `master` ブランチを削除し、`main` ブランチに統一
  - `README.md` に注意事項と更新履歴を追記
