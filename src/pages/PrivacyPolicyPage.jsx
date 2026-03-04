import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">毛球日记 隐私政策</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">定义</h2>
            <p className="text-gray-700 mb-4">
              1. 个人信息：指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。
            </p>
            <p className="text-gray-700 mb-4">
              2. 个人敏感信息：指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息，包括身份证件号码、个人生物识别信息、银行账号、通信记录和内容、财产信息、征信信息、行踪轨迹、住宿信息、健康生理信息、交易信息等。
            </p>
            <p className="text-gray-700 mb-4">
              3. 去标识化：指通过对个人信息的技术处理，使其在不借助额外信息的情况下无法识别特定自然人的过程。
            </p>
            <p className="text-gray-700 mb-4">
              4. 匿名化：指通过对个人信息的技术处理，使其无法识别特定自然人且不能复原的过程。
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">信息收集与使用</h2>
            <p className="text-gray-700 mb-4">
              1. 我们收集的信息
            </p>
            <p className="text-gray-700 mb-4">
              我们会根据您使用的具体功能，收集以下类型的信息：
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-gray-700 mb-2">您提供的信息：当您注册账户、使用我们的服务时，我们可能会收集您提供的个人信息，如姓名、手机号码、邮箱地址等。</li>
              <li className="text-gray-700 mb-2">设备信息：我们可能会收集您使用的设备信息，如设备型号、操作系统版本、设备标识符等。</li>
              <li className="text-gray-700 mb-2">使用信息：我们可能会收集您使用我们服务的相关信息，如浏览历史、搜索记录、使用时间等。</li>
              <li className="text-gray-700 mb-2">位置信息：在您授权的情况下，我们可能会收集您的位置信息，以提供相关的服务。</li>
            </ul>
            
            <p className="text-gray-700 mb-4">
              2. 信息使用
            </p>
            <p className="text-gray-700 mb-4">
              我们收集的信息将用于以下目的：
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-gray-700 mb-2">提供、维护和改进我们的服务；</li>
              <li className="text-gray-700 mb-2">处理您的请求和交易；</li>
              <li className="text-gray-700 mb-2">向您发送相关的通知和信息；</li>
              <li className="text-gray-700 mb-2">分析使用情况，优化用户体验；</li>
              <li className="text-gray-700 mb-2">防止欺诈和安全风险；</li>
              <li className="text-gray-700 mb-2">遵守法律法规的要求。</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">信息存储与保护</h2>
            <p className="text-gray-700 mb-4">
              1. 信息存储
            </p>
            <p className="text-gray-700 mb-4">
              我们会将收集的信息存储在安全的服务器上，并采取适当的技术措施和组织措施来保护您的个人信息。
            </p>
            <p className="text-gray-700 mb-4">
              2. 信息保护
            </p>
            <p className="text-gray-700 mb-4">
              我们采取以下措施来保护您的个人信息：
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-gray-700 mb-2">加密存储：对敏感信息进行加密存储；</li>
              <li className="text-gray-700 mb-2">访问控制：严格控制对个人信息的访问权限；</li>
              <li className="text-gray-700 mb-2">安全审计：定期进行安全审计和评估；</li>
              <li className="text-gray-700 mb-2">员工培训：对员工进行数据保护培训。</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">信息共享与披露</h2>
            <p className="text-gray-700 mb-4">
              1. 我们不会向第三方共享您的个人信息，除非：
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-gray-700 mb-2">获得您的明确授权；</li>
              <li className="text-gray-700 mb-2">遵守法律法规的要求；</li>
              <li className="text-gray-700 mb-2">保护我们的合法权益；</li>
              <li className="text-gray-700 mb-2">与我们的关联方共享，且关联方承诺按照本隐私政策处理您的个人信息。</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">您的权利</h2>
            <p className="text-gray-700 mb-4">
              您有权：
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-gray-700 mb-2">访问和查询您的个人信息；</li>
              <li className="text-gray-700 mb-2">要求更正您的个人信息；</li>
              <li className="text-gray-700 mb-2">要求删除您的个人信息；</li>
              <li className="text-gray-700 mb-2">要求限制处理您的个人信息；</li>
              <li className="text-gray-700 mb-2">要求数据可携带；</li>
              <li className="text-gray-700 mb-2">撤回对个人信息处理的授权；</li>
              <li className="text-gray-700 mb-2">向有关部门投诉或举报。</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">政策更新</h2>
            <p className="text-gray-700 mb-4">
              我们可能会根据法律法规的要求或业务发展的需要，不时更新本隐私政策。更新后的隐私政策将在我们的应用程序或网站上公布，并自公布之日起生效。
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">联系我们</h2>
            <p className="text-gray-700 mb-4">
              如果您对本隐私政策有任何疑问或建议，或需要行使您的权利，请通过以下方式联系我们：
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-gray-700 mb-2">邮箱：support@maoqiuriji.com</li>
              <li className="text-gray-700 mb-2">地址：北京市海淀区中关村科技园区</li>
            </ul>
            
            <p className="text-gray-700 mb-4">
              本隐私政策自2024年1月1日起生效。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;