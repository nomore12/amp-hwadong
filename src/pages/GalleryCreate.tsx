import React, { useEffect, useState } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import * as mutation from '../graphql/mutations';
import { listImagePosts, listPosts } from '../graphql/queries';
import { ImagePostCreateFormInputValues } from '../ui-components/ImagePostCreateForm';
import styled from 'styled-components';

interface PropsType {
  type: string;
}

const ContainerStyle = styled.div`
  padding: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & form {
    border: 1px solid black;
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .textarea {
      width: 500px;
      height: 200px;
      border-radius: 4px;
      border: 1px solid gray;
      padding: 4px;
    }
  }

  .list-btn {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 4px 8px;
  }

  .imglist-wrapper {
    padding: 2rem;
    display: flex;
    //flex-direction: column;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .img-items {
    display: flex;
    gap: 8px;
    width: 480px;

    .item-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .btn-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const GalleryCreate = ({ type }: PropsType) => {
  const [list, setList] = useState<ImagePostCreateFormInputValues[]>([]);
  const [createdAt, setCreatedAt] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState<File>();
  // const [urlList, setUrlList] = useState<string[]>([]);
  const urlList: string[] = [];
  const [refresh, setRefresh] = useState(false);

  // https://stackoverflow.com/questions/73074928/aws-amplify-upload-files-best-practices
  const uploadImagePost = async (
    file: File,
    inputDesc: string,
    inputCreatedAt: string
  ) => {
    let filename = file.name;
    const { key } = await Storage.put(file.name, file, {
      contentType: 'image/*',
    });

    // const imgUrl = await Storage.get(key, { level: 'public' });
    let url;
    await Storage.get(key, {
      level: 'public',
    }).then((res) => (url = res));

    const inputPost = {
      desc: inputDesc,
      imgKey: url,
      createdAt: inputCreatedAt,
      type: type,
    };

    await API.graphql(
      graphqlOperation(mutation.createImagePost, { input: inputPost })
    );
  };

  const getImgUrl = async (key: string) => {
    console.log('key', key);
    return await Storage.get(key, { level: 'public' });
  };

  const getList = async () => {
    // const { results } = await Storage.list('', { level: 'public' });
    // const urls = [];
    // for (const file of results) {
    //   urls.push(await Storage.get(file.key ? file.key : ''));
    // }
    // setList(urls);

    const { data } = (await API.graphql({
      query: listImagePosts,
      // variables: { type: type, limit: 15 },
    })) as any;
    console.log(data.listImagePosts.items);
    setList(data.listImagePosts.items);

    const imgList = data.listImagePosts.items.map(
      (item: ImagePostCreateFormInputValues, index: number) => {
        let imgUrl = '';
        // getImgUrl(item.imgKey ? item.imgKey : '').then((res) => {
        //   console.log('img', index, res);
        //   imgUrl = res;
        // });
        const bb = Storage.get(item.imgKey ? item.imgKey : '', {
          level: 'public',
        }).then((res) => {
          // console.log(item.imgKey, res);
          console.log('url: ', res);
          urlList.push(res);
          setRefresh(!refresh);
          // const urlLists = [...urlList, res];
          // setUrlList(urlLists);
          imgUrl = res;
        });
        console.log(bb);

        return {
          desc: item.desc,
          createdAt: item.createdAt,
          type: item.type,
          imgKey: imgUrl,
        };
      }
    );

    console.log('fetch');
    // setTimeout(() => console.log('timeout'), 3000);
    // setList(imgList);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string
  ) => {
    inputType === 'desc'
      ? setDesc(e.target.value)
      : setCreatedAt(e.target.value);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files ? e.target.files[0] : null;
    img && setImage(img);
  };

  useEffect(() => {
    (async function getLists() {
      const { data } = (await API.graphql({ query: listImagePosts })) as any;
      console.log(data);
      setList(data.listImagePosts.items);
    })();
    // getList();
    // console.log('usf', urlList);
    //
    // setTimeout(() => {
    //   const alist = list.map((item, index) => {
    //     return {
    //       desc: item.desc,
    //       createdAt: item.createdAt,
    //       type: item.type,
    //       imgKey: urlList[index],
    //     };
    //   });
    //   console.log('timeout', list, urlList);
    //   setList(alist);
    // }, 5000);
  }, []);

  useEffect(() => {
    console.log(urlList.length, list.length);
    if (urlList.length > 0) {
      const result = list.map((item, index) => {
        return {
          ...item,
          imgKey: urlList[index],
        };
      });
      console.log('result', result, urlList);
      setList(result);
    }
  }, [refresh]);

  return (
    <ContainerStyle>
      <form style={{ padding: '40px' }}>
        <div>
          <input type="file" onChange={onFileChange} />
        </div>
        <div>
          <input
            className="textarea"
            type="textarea"
            placeholder="이미지의 설명을 입력해주세요."
            onChange={(e) => onChange(e, 'desc')}
          />
        </div>
        <div>
          <input
            type="date"
            name="createdAt"
            onChange={(e) => onChange(e, 'createdAt')}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (image && desc && createdAt) {
                uploadImagePost(image, desc, createdAt);
              } else {
                alert('항목을 모두 작성해주세요.');
              }
              console.log(desc, createdAt);
            }}>
            게시하기
          </button>
        </div>
      </form>
      <div className="imglist-wrapper">
        {list &&
          list.map((item, index) => {
            return (
              <div className="img-items" key={index}>
                <div className="item-wrapper">
                  <div className="img-wrapper">
                    <img src={item.imgKey} alt={item.desc} />
                  </div>
                  <div className="item-content">
                    <div>{item.desc}</div>
                    <div>{item.createdAt}</div>
                    <div className="btn-wrapper">
                      <button className="list-btn">수정하기</button>
                      <button className="list-btn">삭제하기</button>
                    </div>
                  </div>
                </div>
              </div>

              // <div className="img-items" key={index}>
              //   <div className="img-items__image">
              //     <img src={item.imgUrl} alt={item.desc} />
              //     <div>{item.desc}</div>
              //   </div>
              //   <div className="img-items__desc">
              //     <div>{item.createdAt}</div>
              //     <button className="list-btn">수정하기</button>
              //     <br />
              //     <button className="list-btn">삭제하기</button>
              //   </div>
              // </div>
            );
          })}
      </div>
    </ContainerStyle>
  );
};

export default GalleryCreate;
