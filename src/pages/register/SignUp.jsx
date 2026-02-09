import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className='mx-120'>
        <p className='mt-4'>Meta</p>
        <div className='mt-4'>
          <p className='mb-1'>Зарегистрируйтесь в Instagram</p>
          <p>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</p>
        </div>
        <div>
          <div className='mt-5'>
            <p className='mb-2'>Мобильный телефон или электронный адрес</p>
            <input type="text" placeholder='Номер мобильного телефона или электронный адрес' className='py-2 pl-10 pr-90 border rounded-lg' />
          </div>
          <p className='my-4'>Вы можете получать от нас уведомления. <span className='text-blue-800'>Подробнее о том, почему мы запрашиваем вашу контактную информацию</span></p>

          <div>
            <p className='mb-2'>Пароль</p>
            <input type="text" placeholder='Пароль' className='py-2 pl-10 pr-90 border rounded-lg' />
          </div>

          <div>
            <p className='my-3'>Дата рождения</p>

            <div className='flex justify-between'>

              <div>
                <select className='border py-2 pr-20 rounded-lg'>
                  <option>День</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>

              <div>
                <select className='border py-2 pr-20 rounded-lg'>
                  <option>Месяц</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>

              <div>
                <select className='border py-2 pr-20 rounded-lg'>
                  <option>Год</option>
                </select>
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <p className='mb-2'>Название</p>
            <input type="text" placeholder='Имя и фамилия' className='py-2 pl-10 pr-90 border rounded-lg' />
          </div>

          <div className='mt-4'>
            <p className='mb-2'>Имя пользователя</p>
            <input type="text" placeholder='Имя пользователя' className='py-2 pl-10 pr-90 border rounded-lg' />
          </div>

        </div>

        <div>
          <p className='my-4'>Пользователи нашего сервиса могли загрузить вашу контактную информацию в Instagram. <span className='text-blue-800'>Подробнее</span></p>
          <p className='my-4'>Нажимая Отправить, вы соглашаетесь создать аккаунт и принимаете <span className='text-blue-800'>Пользовательское соглашение, Политику конфиденциальности</span> и <span className='text-blue-800'>Политику в отношении файлов cookie</span> Instagram.</p>
          <p className='my-4'><span className='text-blue-800'>Политика конфиденциальности</span> содержит описание того, как мы можем использовать вашу информацию, полученную от вас при создании аккаунта. Например, с ее помощью мы предоставляем, персонализируем и улучшаем наши продукты, включая рекламу.</p>
        </div>
        <div className='mb-2'>
          <button className='py-2 w-145 border rounded-2xl bg-blue-600 text-white'>Отправить</button>
        </div>
        <button className='py-2  border rounded-2xl w-145'>У меня уже есть аккаунт</button>
      </div>
    </>
  )
}

export default SignUp